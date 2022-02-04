using System;
using System.ComponentModel.DataAnnotations;

namespace mission03.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0,100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Exams { get; set; }

        [Required]
        [Range(0, 100)]
        public int INTEX { get; set; }

    }
}
