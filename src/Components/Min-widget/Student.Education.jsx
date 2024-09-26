import React, { useState, useRef, useEffect, } from "react";
import axios from "axios";
import useFecthResume from "../../Hooks/useFetchResume";
function StudentEducation(){
    const {resumeData}=useFecthResume();
    return(
        <div className="lg:w-full p-4 lg:h-auto rounded-lg shadow-lg bg-white">
        <div className="p-4 border-2 border-gray-100 rounded-lg">
          {resumeData && resumeData && resumeData.education && Object.keys(resumeData.education).length > 0 ? (
            Object.keys(resumeData.education).map((key, index) => {
              const details = resumeData.education[key];

              return (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{details.institution}</h3>
                  {key === "college" && (
                    <p className="text-sm font-medium">{details.degree}</p>
                  )}
                  <p className="text-sm text-gray-600">
                    {details.year_of_completion} {details.grade && ` | Grade: ${details.grade}`}
                  </p>
                  <p>{details.cgpa}</p>
                </div>
              );
            })
          ) : (
            <p className="text-sm text-gray-500">Edit Your Profile To Add Data</p>
          )}
        </div>

      </div>
    );
}
export default StudentEducation;