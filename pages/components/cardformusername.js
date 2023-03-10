import React, { useContext } from "react"
import {Button, Label, TextInput, Card} from "flowbite-react"
import { GlobalContext } from "../actions/GlobalContext"
import { useRouter } from 'next/router'
import TableRepo from "./tablerepos"

function FormUsername(){

    const { state } = useContext(GlobalContext)
    const router = useRouter()
    
    const {
        input,
        setInput
    } = state

    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name === "username") {
            setInput({ ...state, username: value })
        }
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        // router.push('/components/tablerepos')
        router.push({
            pathname: '/components/tablerepos',
            query: { name:  input.username},
        })

    }



    return (
        <div className="flex justify-center items-center">
            <div>
                <Card className="cardTop">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Search GitHub Repositorie's
                    </h5>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="username"
                                value="User Name:"
                            />
                            </div>
                            <TextInput
                            id="username"
                            type="text"
                            required={true}
                            onChange={handleInput}
                            value={input.username}
                            name="username"
                            />
                        </div>
                        <Button type={'submit'}>
                            Search
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default FormUsername