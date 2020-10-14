import React from 'react';
import { Table } from 'reactstrap';
import './home_page.css';

export default function EditHistory() {
    return (
        <div>
            <h4 className = 'edithistory_heading'>
                Recent Changes
            </h4>

            <Table className = 'edithistory'>
                <thead>
                    <tr>
                        <th>Changed Property</th>
                        <th>Date of Change</th>
                        <th>Changed by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Property 1</td>
                        <td>4 / 20 / 1999 - 5:34pm</td>
                        <td>@jjredick</td>
                    </tr>
                    <tr>
                        <td>Property 2</td>
                        <td>12 / 25 / 1985 - 7:15am</td>
                        <td>@stevedfisk</td>
                    </tr>
                    <tr>
                        <td>Property 3</td>
                        <td>1 / 6 / 2005 - 8:44pm</td>
                        <td>@johncena</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      );
}