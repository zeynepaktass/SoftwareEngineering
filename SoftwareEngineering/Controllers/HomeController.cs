using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SoftwareEngineering.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult compaigns()
        {
            return View();
        }

        public ActionResult comp1()
        {
            return View();
        }

        public ActionResult comp2()
        {
            return View();
        }

        public ActionResult comp3()
        {
            return View();
        }

        public ActionResult comp4()
        {
            return View();
        }
    }
}