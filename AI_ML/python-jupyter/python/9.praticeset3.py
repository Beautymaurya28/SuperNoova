#question 1
user=input("enter your name: ")
print("Good Afternoon ",user)
print(f"Good Afternoon {user}")

#question 2
letter="""Dear <|Name|>,you are selected ! <|date|>"""
print(letter.replace("<|Name|>","Beauty").replace("<|date|>","23 june 2024"))

#question 3
name="harry is a good boy  and"
print(name.find("  "))

#question 4
name="harry is a good boy  and"
print(name.replace("  "," "))


#question 5
Letter="Dear Beauty, this python course is nice. Thanks!"
print(Letter)
Letter1="Dear Beauty, \nthis python course is nice. \nThanks!"
print(Letter1)
