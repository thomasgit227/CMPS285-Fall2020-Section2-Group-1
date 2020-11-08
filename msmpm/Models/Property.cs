﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace MSMBackend.Models
{
    public class Property
    {

        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }

        //[Required]
        //public string Username { get; set; }

        [Required]

        public string ImageURL { get; set; }

        [Required]
        public Boolean Utilities { get; set; }

        //public int SteveID { get; set; }

        [Required]
        public int Roof { get; set; }

        [Required]
        public int ExtWalls { get; set; }

        [Required]
        public int ExtOpenings { get; set; }

        [Required]
        public int Framework { get; set; }

        [Required]
        public int Piers { get; set; }

        [Required]
        public int Chimney { get; set; }

        [Required]
        public int Door { get; set; }

        [Required]
        public int Windows { get; set; }

        [Required]
        public int Shutters { get; set; }

        [Required]
        public int Flooring { get; set; }

        [Required]
        public int Electrical { get; set; }

        [Required]
        public int Plumbing { get; set; }

        [Required]
        public int Sewer { get; set; }

        [Required]
        public int HVAC { get; set; }

        [Required]
        public DateTimeOffset Created { get; set; }

        //public DateTimeOffset? LastUpdated {get; set;}
        
        //public DateTimeOffset? Deleted { get; set; }

        public string UsersId { get; set; }


        //Average method if we decide to implement it in the Property class and not calculate it through the Repo
        /*public int Average()
        {
            int avg = Roof + ExtWalls + ExtOpenings + Framework + Piers;
            avg += Chimney + Door + Windows + Shutters + Flooring;
            int div = 0;

            if (Utilities)
            {
                avg += Electrical + Plumbing + Sewer + HVAC;

                div = 14;
            }
            else
            {
                div = 10;
            }
            avg /= div;
            return avg;
        }

        
        public void SetTime()
        {
            EditTime = DateTimeOffset.Now;
        }*/
        
    }
}
