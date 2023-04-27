import React from "react";

export type NewComponentType = {
    cars: CarsType[]
}

export type CarsType = {
    manufacturer: string
    model: string
    id: number
}

export const NewComponents = (props: NewComponentType) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>
            {props.cars.map((objectFromCarsTypeArray) => {
                return (
                    <tr key={objectFromCarsTypeArray.id}>
                        <td>{objectFromCarsTypeArray.manufacturer}</td>
                        <td>{objectFromCarsTypeArray.model}</td>
                    </tr>
                    );
                    })}
                    </tbody>
            </table>
            )
                ;
            }


                /*
                export const NewComponents = (props: NewComponentType) => {
                    return (
                        <>
                            {props.cars.map((objectFromCarsTypeArray, index) => {
                                return (
                                    <table>

                                        <thead key={index}>

                                        </thead>
                                        <tbody>
                                        <tr>

                                            <td>{objectFromCarsTypeArray.manufacturer}</td>


                                            <td>{objectFromCarsTypeArray.model}</td>
                                        </tr>
                                    </tbody>

                                    </table>
                                )
                            })}
                        </>
                    );
                };
                */


                /*


                export type NewComponentType = {
                    students: StudentType[]
                }

                export type StudentType = {
                    id: number
                    name: string
                    age: number
                }
                export const NewComponents = (props: NewComponentType) => {
                    return (
                        <ul>
                            {props.students.map((objectFromStudentArray, index) => {
                                return (
                                        <li key={objectFromStudentArray.id}>
                                            <span>{objectFromStudentArray.name}</span>
                                            <span>{objectFromStudentArray.age}</span>
                                        </li>
                                        )
                                        })}
                                    </ul>

                                );
                            };
                */

                export default NewComponents;