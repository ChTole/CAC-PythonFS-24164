# Ejemplo:
# Factor sanguineo: Rh+ / Rh-

factor = "Rh-"

if factor == "Rh+":
    print("Sos factor Rh+")
elif factor == "Rh-":
    print("Sos factor Rh-")
else:
    print('No reconozco el factor')
    
# Mismo ejemplo con match - case
# de Python 3.10
match factor:
    case "Rh+":
        print("Sos factor Rh+")
    case "Rh-":
        print("Sos factor Rh-")
    case _:
        print('No reconozco el factor')
# Python NO ES RETROCOMPATIBLE!!! CUIDADO!!!
