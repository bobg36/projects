import os

# Define the directory path relative to the current script
directory_path = 'images/skill icons'

# Check if the directory exists
if os.path.exists(directory_path):
    # List all files and directories in the specified directory
    for filename in os.listdir(directory_path):
        print(filename)
else:
    print(f"The directory {directory_path} does not exist.")
