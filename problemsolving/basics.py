'''
gernate a transportaion app which suggest user 
to select mode of transport based on distance !

'''

mode_of_transportaion=int(input("please enter the distance to be converd: "));

if mode_of_transportaion<3:
    print("walk")

elif mode_of_transportaion>3 and mode_of_transportaion<15:
    print("bike")

elif mode_of_transportaion>=15:
    print("bus")
else:
    print("invalid entry")
