import urllib.request
import urllib.parse
import os
import time

gear_list = [
    ('c1', 'ARRI Alexa 35 cinema camera on black studio background, ultra realistic, professional lighting, 8k'),
    ('c2', 'RED V-RAPTOR 8K cinema camera on black studio background, ultra realistic, professional lighting, 8k'),
    ('c3', 'Sony FX9 cinema camera on black studio background, ultra realistic, professional lighting, 8k'),
    ('c4', 'Blackmagic URSA Mini Pro G2 cinema camera on black studio background, ultra realistic, professional lighting, 8k'),
    ('l1', 'Sigma Cine Prime lens on black studio background, ultra realistic, professional lighting, 8k'),
    ('l2', 'Zeiss CP.3 cinema lens on black studio background, ultra realistic, professional lighting, 8k'),
    ('l3', 'Canon CN-E 50mm cinema lens on black studio background, ultra realistic, professional lighting, 8k'),
    ('li1', 'ARRI SkyPanel S60-C LED light panel on black studio background, ultra realistic, professional lighting, 8k'),
    ('li2', 'Aputure 600d Pro LED light on black studio background, ultra realistic, professional lighting, 8k'),
    ('li3', 'Nanlite Forza 720B LED light on black studio background, ultra realistic, professional lighting, 8k'),
    ('a1', 'Sound Devices 888 audio mixer on black studio background, ultra realistic, professional lighting, 8k'),
    ('a2', 'Sennheiser MKH 416 shotgun microphone on black studio background, ultra realistic, professional lighting, 8k'),
    ('a3', 'DPA 4061 Lavalier microphone on black studio background, ultra realistic, professional lighting, 8k'),
    ('s1', 'DJI Ronin 4D cinema camera gimbal on black studio background, ultra realistic, professional lighting, 8k'),
    ('s2', 'Sachtler Video 20 fluid head tripod on black studio background, ultra realistic, professional lighting, 8k'),
    ('s3', 'Dana Dolly camera slider on black studio background, ultra realistic, professional lighting, 8k')
]

os.makedirs('assets/gear', exist_ok=True)

for gear_id, prompt in gear_list:
    print(f"Downloading image for {gear_id}...")
    encoded_prompt = urllib.parse.quote(prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=800&height=600&nologo=true"
    
    max_retries = 3
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(f'assets/gear/{gear_id}.jpg', 'wb') as out_file:
                out_file.write(response.read())
            break
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {e}")
            time.sleep(2)

print("All images downloaded successfully!")
