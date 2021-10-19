import React from "react";
import { useForm }from 'react-hook-form';

export default function Stack() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="stack" ref={register}/>
            <input type="text" name="stack" ref={register}/>
            <input type="text" name="stack" ref={register}/>
            <input type="text" name="stack" ref={register}/>
            <input type="submit"/>
        </form>
    )
}