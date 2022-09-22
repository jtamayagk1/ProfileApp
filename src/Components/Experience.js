import React from "react";

export default function Experience(){
    return(
        <div class="section">
            <h3>Work Experience</h3>
            <table class="workExpTable">
                <thead>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr class="workExpRow">
                        <td>02/2022 - Current</td>
                        <td>SoftwareONE</td>
                        <td>Join the academy in February and worked on the Skills Matrix application</td>
                    </tr>
                    <tr class="workExpRow">
                        <td>07/2018 - Current</td>
                        <td>GSA</td>
                        <td>Work in the concession stand</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}