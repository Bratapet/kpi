#!./env/bin/python
'''
# Small script to provide a nicer interface for selecting files to upload to the MongoDB
	Written by: Dennis Hedlund
'''

'''
#  Import statements =====================
'''
from Tkinter import Tk
from tkFileDialog import askopenfilename
import sys
sys.path.append('./modules')
import importincomingincs
import importoutgoingincs
"" '''
# Global Variables =======================
'''
data = ["Import Incoming INCs", "Import Outgoing INCs"]

def methodselection(userselection,filename):
	if userselection == 0:
		importincomingincs.import_inc(filename)
	if userselection == 1:
		importoutgoingincs.import_inc(filename)

def Main():
	Tk().withdraw()
	
	print "What type of data would you like to upload to datebase?"
	for count,d in enumerate(data):
		print "{}: {}".format(count, d)

	userselection = int(raw_input("Please select a value between 0 and " + str(len(data)-1) + ": "))

	if userselection > len(data):
		print "Invalid Selection! Select value between 0 and " + str(len(data)-1)
		sys.exit(0)

	filename = askopenfilename()
	methodselection(userselection,filename)


if __name__ == "__main__":
	Main()