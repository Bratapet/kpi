#!../env/bin/python

#Import statesments ============================================
import sys
import os
from pymongo import MongoClient

#Global Variables ==============================================
datastructholder = []
mclient = MongoClient('localhost', 27017)


def validate_file_path(csvfile):
	try:
		f = open(csvfile)
		f.close()
		return True
	except IOError:
		return False
	except:
		print "General validate_file_path error!! wtf, how can this even fail?!"
		sys.exit(0)

def importer(csvfile):
	if validate_file_path(csvfile):
		with open(csvfile) as f:
			for line in f:
				linesplit = line.split(',')
				post = {"INCnr":linesplit[0].replace('"','').replace('\\',''),
						"date":linesplit[1].replace('"','').replace('\\',''),
						"organisation":linesplit[2].replace('"','').replace('\\',''),
						"group":linesplit[3].replace('"','').replace('\\',''),
						"nrlt24":linesplit[4].replace('"','').replace('\\',''),
						"nrwl":linesplit[5].replace('"','').replace('\\',''),
						"inclt24":linesplit[6].replace('"','').replace('\\',''),
						"status":linesplit[7].replace('"','').replace('\\','')}
				datastructholder.append(post)

	else:
		print "Invalid file path: \n"+csvfile

	db = mclient['dnoc']
	print db
	
	collection = db['incidentupdate']
	print collection

	for post in datastructholder:
		post_id = collection.insert_one(post).inserted_id
		print "Created post: {}".format(post_id)

if __name__=="__main__":
	csvfile = raw_input("Please provide filename:\n")
	importer(csvfile)