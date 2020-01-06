import React, { useState } from 'react'
import Benchmark, { BenchmarkType } from 'react-component-benchmark'

const limit = 10

const Benchmarked = ({ title, ...props }) => {
    let finished = 0
    const res = []
    let benchRef
    const start = () => {
        benchRef.start()
    }
    const [results, setResults] = useState(null)

    const handleComplete = r => {
        res.push(r)

        if (++finished === limit) {
            setResults(res)
        } else {
            setTimeout(() => benchRef.start())
        }
    }
    const setBenchRef = ref => {
        benchRef = ref
    }

    return (
        <article>
            <h3>{title}</h3>
            <button type="button" onClick={start}>
                Start
            </button>
            {results &&
                results.map(({ startTime, runTime }, i) => (
                    <h4 key={startTime}>
                        Run #{i + 1}: {runTime}
                    </h4>
                ))}
            {results && <h4>Total AVG: {results.reduce((acc, { runTime }) => acc + runTime, 0) / results.length}</h4>}
            <Benchmark
                {...props}
                onComplete={handleComplete}
                ref={setBenchRef}
                samples={25}
                timeout={10000}
                type={BenchmarkType.MOUNT}
            />
        </article>
    )
}

export default Benchmarked
