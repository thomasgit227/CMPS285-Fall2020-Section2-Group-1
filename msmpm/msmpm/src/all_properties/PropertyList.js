import React, { useEffect, useState } from 'react';
import './All_Properties.css';
import { 
    Table,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import ListedProperty from './ListedProperty';
import Properties from './Properties';
import axios from 'axios';

export default function PropertyList() {

    const [tableInfo,setTableInfo] = useState({
        columns: [{
            name: "Name",
            location: "Location",
            id: "Id"
        }],
        data: [],

    });

    useEffect(() => {
        axios.get("/api/Properties")
        .then( (res) =>{
            setTableInfo( (table) => {
                const callInfo = {...table};
                res.data.map( (d) => {
                    callInfo.data = [...callInfo.data, d];
                })
                return callInfo;
            })
        })
    },[])

    const rows = tableInfo.data;

    console.log(tableInfo);

    return (
        <div className = 'fulllist'>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    { rows.map( (row) => (
                        <div className = "row">
                            <th>{row.name}</th>
                            <th>{row.location}</th>
                            <th>{row.id}</th>
                        </div>                    
                    ))}
                </tbody>
            </Table>
        </div>
      );
}