import React from "react";

export default function Skills(){
    return(
        <div class="skill section">
            <h3>Skills</h3>
            <table>
                <tr>
                    <td>
                        <table>
                            <tr class="skillItem">
                                <td>AWS Development</td>
                                <td>⭐⭐⭐⭐</td>
                            </tr>
                            <tr class="skillItem">
                                <td>Java</td>
                                <td>⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr class="skillItem">
                                <td>React</td>
                                <td>⭐⭐⭐</td>
                            </tr>
                            <tr class="skillItem">
                                <td>JavaScript</td>
                                <td>⭐⭐</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
}