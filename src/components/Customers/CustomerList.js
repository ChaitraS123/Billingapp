import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomerItem from './CustomerItem'
import { customerAll } from '../../actions/customeraction'


const CustomerList = () => {
    const customers = useSelector(state => state.customers);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(customerAll())
    }, [dispatch])

    return (
        <div>
            <h3>Total customers-{customers.length}</h3>
            {customers.map((el) => {
                return <CustomerItem key={el._id} id={el._id} name={el.name} mobile={el.mobile} email={el.email} />
            })}
        </div>
    )
}
export default CustomerList