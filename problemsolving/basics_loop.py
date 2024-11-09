table_number_upto=int(input("enter the table number upto: "))

for i in range(1,table_number_upto+1):
    for j in range(1,11):
        if i!=5:
            print(i," x ",j," = ",i*j)

