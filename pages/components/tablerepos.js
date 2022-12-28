import React, { useEffect,  useState} from "react"
import {Table, Card} from "flowbite-react"
import axios from "axios"
import {useRouter} from 'next/router';

function TableRepo(){

    const router = useRouter()
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(`https://api.github.com/users/${router.query.name}/repos`)
        .then((res) => {
            setData([...res.data])
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return (
        <div className="flex justify-center items-center">
            <Card className="cardTop">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Repositories {router.query.name}
                </h5>

                <Table hoverable={true}>
                    <Table.Head style={{backgroundColor: "purple", color: "white"}}>
                        <Table.HeadCell>
                            No
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Actions
                        </Table.HeadCell>
                    </Table.Head>

                    { data !== null && data.map((res, index) => {
                        return(
                            <>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={res.id}>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>

                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {res.name}
                                    </Table.Cell>

                                    <Table.Cell className="whitespace-nowrap font-medium text-blue-600">
                                        <a href={res.html_url}>Go to link</a>
                                    </Table.Cell>
                                </Table.Row>
                            </>
                        )
                    })}
                </Table>
            </Card>
        </div>
    )
}

export default TableRepo