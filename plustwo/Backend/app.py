
from flask import Flask, request,jsonify,make_response
from flask_cors import cross_origin
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)

jobMaster = db.collection("JobMaster")
internshipMaster = db.collection("InternshipMaster")
userMaster=db.collection("UserMaster")
userSubscriptionMaster=db.collection("UserSubscriptionCartMaster")


def storeJobMaster(jobID, data):
    jobMaster.document(jobID).set(data)
    
def storeIntershipMaster (internshipID,data):
    internshipMaster.document(internshipID).set(data)

def deleteJob(jobID):
    jobMaster.document(jobID).delete()


def deleteInternship(internshipID):
    internshipMaster.document(internshipID).delete()


def updateJobDatabase(jobID, jobData):
    jobMaster.document(jobID).update(jobData)


def updateInternship(internshipID, internshipData):
    internshipMaster.document(internshipID).update(internshipData)


    



@app.route("/postjob", methods=["POST", "GET"])
@cross_origin()
def postjob():
    if request.method == "POST":
        jobdata = request.get_json(force=True)
        jobdata = jobdata["data"]
        jobID = jobdata["jid"]
        storeJobMaster(jobID, jobdata)
        return {"reply": jobID}
    return {"reply": "something went wrong"}


@app.route("/postInternship", methods=["POST", "GET"])
@cross_origin()
def postInternship():
    if request.method == "POST":
        internshipdata = request.get_json(force=True)
        internshipdata = internshipdata["data"]
        internshipID = internshipdata["iid"]
        storeIntershipMaster(internshipID, internshipdata)
        return {"reply": internshipID}
    return {"reply": "something went wrong"}

@app.route("/getjob", methods=["GET"])
@cross_origin()
def getjob():
    try:

        jid=request.args.get('jid')
        doc = jobMaster.document(jid).get()
        print(doc)
        
        return make_response(jsonify(doc.to_dict()),200)
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route("/deleteJob", methods=["POST", "GET"])
@cross_origin()
def deleteJob():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        # Send only JobID as value on "data" key from Front-End
        jobID = recievedData["data"]
        deleteJob(jobID)
        return {"reply": "Job Deleted Successfully"}
    return {"reply": "Something Went Wrong"}


@app.route("/updateJob", methods=["POST", "GET"])
@cross_origin()
def updateJob():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        jobData = recievedData["data"]
        jobID = jobData["jid"]
        updateJobDatabase(jobID, jobData)
        return {"reply": "Job Updated Successfully"}
    return {"reply": "Something Went Wrong"}


@app.route("/deleteInternship", methods=["POST", "GET"])
@cross_origin()
def deleteInternship():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        # Send only InternshipID as value on "data" key from Front-End
        internshipID = recievedData["data"]
        deleteInternship(internshipID)
        return {"reply": "Internship Deleted Successfully"}
    return {"reply": "Something Went Wrong"}


@app.route("/updateInternship", methods=["POST", "GET"])
@cross_origin()
def updateInternship():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        internshipData = recievedData["data"]
        internshipID = internshipData["iid"]
        updateInternship(internshipID, internshipData)
        return {"reply": "Internship Updated Successfully"}
    return {"reply": "Something Went Wrong"}






@app.route("/user/add", methods=["POST", "GET"])
@cross_origin()
def postuser():
    if request.method == "POST":
        userdata = request.get_json()
        
        
        userID = userdata["email"]
        userMaster.document(userID).set(userdata)
        return {"reply": "Data Recorded"}
    return {"reply" : "something went wrong"}

@app.route('/user', methods=['GET'])
@cross_origin()
def userlookup():
    '''
        During Authentication used for lookup
    '''
    try:

        email=request.args.get('email')
        doc = userMaster.document(email).get()
        print(doc)
        print("It is working authentication")
        return make_response(jsonify(doc.to_dict()),200)
    except Exception as e:
        return f"An Error Occured: {e}"



@app.route('/user/update', methods=['POST', 'PUT'])
@cross_origin()
def usrupdate():
    
    try:
       
        email = request.json['email']
        userMaster.document(email).update(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"


@app.route('/user/delete', methods=['GET', 'DELETE'])
@cross_origin()
def usrdelete():
   
    try:
        # Check for ID in URL query
        email = request.args.get('email')
        print(email)
        userMaster.document(email).delete()
        
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/addtransaction', methods=["POST"])
@cross_origin()
def addtransaction():
   
    try:
        # Check for ID in URL query
        request.json['subcartUsrActiveStatus']=False
        request.json['subcartResActiveStatus']=False
        userSubscriptionMaster.document().set(request.json)
        return jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route("/searchJob", methods=["POST", "GET"])
@cross_origin()
def searchJob():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        # send searchKey and criteria-of-search to search for from Front-End
        searchCriteria = recievedData["criteria"]
        searchKey = recievedData["searchKey"]
        result = db.collection('JobMaster').where(
            searchCriteria, "==", searchKey).get()

        # Primary skill, Location , Level of Experience, Company Name, JID

        documents = list(doc.to_dict() for doc in result)

        return {"reply": documents}
    return {"reply": "Something Went Wrong"}
@app.route("/searchInternship", methods=["POST", "GET"])
@cross_origin()
def searchInternship():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        # send searchKey and criteria-of-search to search for from Front-End
        searchCriteria = recievedData["criteria"]
        searchKey = recievedData["searchKey"]
        result = db.collection('InternshipMaster').where(
            searchCriteria, "==", searchKey).get()

        # Primary skill, Location , Level of Experience, Company Name, JID

        documents = list(doc.to_dict() for doc in result)

        return {"reply": documents}
    return {"reply": "Something Went Wrong"}



@app.route("/fetchJob", methods=["POST", "GET"])
@cross_origin()
def fetchJob():
    if request.method == "POST":
        recievedData = request.get_json(force=True)
        # send searchKey and criteria-of-search to search for from Front-End
        jobID = recievedData["jid"]
        result = db.collection('JobMaster').where(
            "jid", "==", jobID).get()

        # Primary skill, Location , Level of Experience, Company Name, JID

        documents = list(doc.to_dict() for doc in result)

        return {"reply": documents}
    return {"reply": "Something Went Wrong"}

@app.route('/gettransaction', methods=["GET"])
@cross_origin()
def gettransaction():
   
    try:
        # Check for ID in URL query
        email=request.args.get('email')

        u = userMaster.document(email).get()
        u1 = u.to_dict()
        if u1["isEmployer"]:
            doc=db.collection('JobMaster').where('employer_email', '==', email).stream()
            doc1=[]
            for x in doc:
                print(x.to_dict())
                doc1.append(x.to_dict())
                # x = x.to_dict()
                # jid = x.get('jid')
                # doc1.append(jobMaster.document(jid).get().to_dict())
            print(doc1)
            return jsonify(doc1), 200
        else:
            doc=db.collection('UserSubscriptionCartMaster').where('subcartUsrID', '==', email).stream()
            doc1=[]
            for x in doc:
                x = x.to_dict()
                jid = x.get('subcartResID')
                doc1.append(jobMaster.document(jid).get().to_dict())
            print(doc1)
            return jsonify(doc1), 200
        
    except Exception as e:
        return f"An Error Occured: {e}"

@app.route('/getapplicants', methods=["GET"])
@cross_origin()
def getapplicants():
   
    try:
        # Check for ID in URL query
        jobid=request.args.get('jobid')
        doc=db.collection('UserSubscriptionCartMaster').where('subcartResID', '==', jobid).stream()
        doc1=[]
        for x in doc:
            print(x.to_dict())
            doc1.append(x.to_dict())
        print(doc1)
        return jsonify(doc1), 200
        
    except Exception as e:
        return f"An Error Occured: {e}"

if __name__ == "__main__":
    app.run(debug=True)
