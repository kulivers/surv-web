import {HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis} from "react-vis";

export const Chart = ({data}) => {
    return (<div>
        <XYPlot
            width={300}
            height={300}
            yDomain={[0., 1.]}>
            <HorizontalGridLines/>
            <LineSeries
                data={data}/>
            <XAxis/>
            <YAxis/>
        </XYPlot>
    </div>)
}