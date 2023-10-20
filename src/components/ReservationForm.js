import React, {useState, useRef} from "react";


const ReservationForm = ({property}) => {
    const formRef = useRef(null)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzrFmuiBFl2NwQlnaxfTgGja7CtK0hNoKr_NXbk17VhMV6SiZbWvIEY85RW0b1BxrQjBQ/exec'
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [formClass, setFormClass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(formRef.current),
        }).then(res => {
            setMessage('Reservation Successful!')
            setFormClass('success-message')

            setTimeout(() => {
                setFormClass('')
                setMessage('')
                }, 5000);

            setLoading(false)
            formRef.current.reset()
        })
    }


    return (
        <>
        <form className='form-group' name="submit-to-google-sheet" ref={ formRef } onSubmit={handleSubmit}>
            <input type='text' name='firstname' placeholder='First name' className='form-control'  required/>
            <input type='text' name='lastname' placeholder='Last name' className='form-control'  required/>
            <input type='text' name = 'propertytitle' value = {property.title}  className='form-control' />
            <input type='email' name='email' placeholder='Email' className='form-control'  required/>
            <input type='tel' name='phone' placeholder='Phone' className='form-control'  required/>
                <div className='check-form-group'>
                <div className='checkin-form'>
                <label htmlFor = 'checkin'>Check in</label>
                <input type='date' id='checkin' name='checkin'  className='form-control' required/>
                </div>
                <div className='checkout-form'>
                <label htmlFor = 'checkout'>Check out</label>
                <input type='date' id='checkout' name='checkout' className='form-control' required/>
                </div>
                </div>
            <input type='number' name='adultnum' placeholder='Adult' className='form-control'  required/>
            <input type='number' name='childnum' placeholder='Children' className='form-control'  required/>
            <input type='submit' value={loading ? "Please Wait..." : "Reserve"}  className='form-control'/>
        </form>
        <p className={ formClass }> { message } </p>
        </>
        
     );
}
 
export default ReservationForm;