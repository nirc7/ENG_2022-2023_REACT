using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for StudentsWS
/// </summary>
[WebService(Namespace = "http://nir.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class StudentsWS : System.Web.Services.WebService {

    public StudentsWS () {
        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }
    
    [WebMethod]
    public string GetStudents(int num)
    {
        Student[] students = new Student[num];
        for (int i = 0; i < num; i++)
        {
            students[i] = new Student();
        }
        JavaScriptSerializer serializer = new JavaScriptSerializer();
        string jsonString = serializer.Serialize(students);
        return jsonString;
    }
}

class Student
{
    static int count=0;
    public Student()
    {
        ID = count;
        count++;
        Name = "avi" + ID;
        Grade = 80 + ID;
    }
    public int ID { get; set; }
    public string Name { get; set; }
    public double Grade { get; set; }
}
