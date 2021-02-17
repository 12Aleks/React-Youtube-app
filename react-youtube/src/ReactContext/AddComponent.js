import React, {useState} from 'react'

export default function AddComponent({sendForm}) {
    const [form, setForm] = useState(
        {
            name: '',
            age: 0
        }
    );

    const submitHandler = (e) => {
        e.preventDefault();
         sendForm({...form})
         setForm({
             name: '',
             age: 0
         })
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" value={form.name} onChange={(event => setForm({name: event.target.value}))}/>
            <input type="text" value={form.age} onChange={(event) => setForm({age: event.target.value})}/>
            <button type="submit">Send</button>
        </form>
    )
}