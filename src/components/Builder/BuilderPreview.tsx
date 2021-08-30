import React, { ReactElement } from 'react'
import dummy_builder_data from '../../../dummy_data/dummy_builder_data'
import HeadingWidget from '../../../dummy_data/Heading.widget'
import WidgetRender from './WidgetRender'


interface Props {
    
}

export default function BuilderPreview({}: Props): ReactElement {
    return (
        <div>
            {dummy_builder_data.builder_data.map((val, i) => {
                return <WidgetRender type={val.type} widget_data={val} />
            })}
        </div>
    )
}
