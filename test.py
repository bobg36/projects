import requests
from bs4 import BeautifulSoup
import os

# The URL of the website
url = "https://axie.tech/charts"

# Send an HTTP request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content of the page
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all the image tags on the page
    img_tags = soup.find_all('img')

    # Create a directory to save the images
    if not os.path.exists("images"):
        os.makedirs("images")

    # Download and save each image
    for img_tag in img_tags:
        img_url = img_tag['src']
        img_name = img_url.split("/")[-1]
        with open(os.path.join("images", img_name), 'wb') as img_file:
            img_data = requests.get(img_url).content
            img_file.write(img_data)
            print(f"Saved {img_name}")

else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")
