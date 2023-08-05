import React from 'react'
import styles from './user.module.scss'
import Search from '../../../public/icons/search.svg'
const User = () => {
    const user = [
        {
            title: 'User',
            name: 'Name',
            icon: <Search />,
        }
    ]
    const data = [
        {
            name: 'tejesh',
            SurName: 'karna',
            Email: 'tejesh@gmail.com',
            Phone: '87689077678',
            Referral: 'TY0aw',
            AmountPaid: '3000',
            CreatedAt: '2-08-2023',
            check: 'checkbox'
        },
        {

            name: 'Tejesh',
            SurName: 'karna',
            Email: 'tejesh@gmail.com',
            Phone: '87689077678',
            Referral: 'TY0aw',
            AmountPaid: '3000',
            CreatedAt: '2-08-2023',
            check: 'checkbox'
        }
    ]
    return (
        <div className={styles.user_container}>
            <div className='contain'>
                <div className={styles.table_data}>
                    {
                        user.map((item,index) => {
                            return (
                                <>
                                    <div className={styles.user_wrapper} key={index+1}>
                                        <h1 className={styles.title}>{item.title}</h1>
                                        <div className={styles.input_block}>
                                            <input placeholder='search' type='search' className={styles.input_field} />
                                            <div className={styles.icon}>
                                                {item.icon}
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <table className={styles.tables}>
                        <thead className={styles.rows_data}>
                            <th></th>
                            <th className={styles.rows_head}>Name</th>
                            <th className={styles.rows_head}>SurName</th>
                            <th className={styles.rows_head}>Email</th>
                            <th className={styles.rows_head}>Phone</th>
                            <th className={styles.rows_head}>Referral</th>
                            <th className={styles.rows_head}>Amount Paid</th>
                            <th className={styles.rows_head}>Created At</th>
                        </thead>
                        <tbody>
                            {data.map((item, index) => {
                                return (

                                    <tr key={index + 1} className={styles.rows_data_sub}>
                                        <td> <input type={item.check}/></td>
                                        <td className={styles.rows_head_wrapper}>{item.name}</td>
                                        <td className={styles.rows_head_wrapper}>{item.SurName}</td>
                                        <td className={styles.rows_head_wrapper}>{item.Email}</td>
                                        <td className={styles.rows_head_wrapper}>{item.Phone}</td>
                                        <td className={styles.rows_head_wrapper}>{item.Referral}</td>
                                        <td className={styles.rows_head_wrapper}>{item.AmountPaid}</td>
                                        <td className={styles.rows_head_wrapper}>{item.CreatedAt}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User