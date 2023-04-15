import React, { PropsWithChildren } from 'react'

const PageContent: React.FC<PropsWithChildren> = props => {
    return (
        <div className="ml-0 md:ml-72 lg:ml-80 flex flex-col">{props.children}</div>
    )
}

export default PageContent