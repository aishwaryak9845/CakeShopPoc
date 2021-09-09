using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Data.Entity;


namespace WebApplication2.Controllers
{
    public class CakeController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"
                    select CakeId,CakeName,CakeType
                    from
                    dbo.Cake
                    ";
            DataTable table = new DataTable();
            using (SqlConnection con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["CakesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(Cake cak)
        {
            try
            {
                string query = @"
                    insert into dbo.Cake values
                    (
                    '" + cak.CakeName + @"'
                    ,'" + cak.CakeType + @"'
                   
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CakesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Add!!";
            }
        }


        public string Put(Cake cak)
        {
            try
            {
                string query = @"
                    update dbo.Cake set 
                    CakeName='" + cak.CakeName + @"'
                    ,CakeType='" + cak.CakeType+ @"'
                   
                    where CakeId=" + cak.CakeId + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CakesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Cake 
                    where CakeId=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["CakesAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Delete!!";
            }
        }

        [Route("api/Cakes/GetAllCakeTypeNames")]
        [HttpGet]
        public HttpResponseMessage GetAllCakeTypeNames()
        {
            string query = @"
                    select CakeTypeName from dbo.CakeType";

            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["CakesAppDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

     
    }
}
    
