import sys,os,eel
eel.init('web')
session=0

@eel.expose
def loginpy(username,password):
    global session
    if(username=="admin@sih.com" and password=="1234"):
        session=1
        return session
    else:
        return session

@eel.expose
def logoutpy():
    global session
    session=0


@eel.expose
def checkSessionpy():
    global session
    return session

@eel.expose  
def trainingpy():
    import trainning
    return "completed"

@eel.expose
def facerecogjs():
    import vedio

@eel.expose
def timestamppy(ID_NUMBER):
    path='C:/Users/tarun aggarwal/Desktop/New folder/'+str(ID_NUMBER)+'.txt'
    os.startfile(path)

@eel.expose
def photopy(ID_NUMBER):
    path='C:/Users/tarun aggarwal/Desktop/New folder/face/'+str(ID_NUMBER)+'.jpg'
    os.startfile(path)

@eel.expose
def Dataset(id,name):
    from dataset1 import det
    det(id,name)
    return "completed"

eel.start('login.html',size=(1320,786))