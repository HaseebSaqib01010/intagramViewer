import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'

const AppWrapper = ({ children }: any) => {
    const theme = createTheme({});
    return (
        <MantineProvider theme={theme}>
            <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 pt-24">
                <div className='max-w-7xl'>
                    {children}
                </div>
            </main>
        </MantineProvider>
    )
}

export default AppWrapper