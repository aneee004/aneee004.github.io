import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Big Data Analytics Pipeline',
        projectDesc: 'This is a big data analytics pipeline build in spark to process equity OHLCV data and build a ML model to predict the direction of the stock price movement.',
        tags: ['Python', 'Spark', 'ML', 'Big Data'],
        code: 'https://github.com/ebbynav/Stock-Market-Prediction-and-Analysis',
        demo: 'https://github.com/ebbynav/Stock-Market-Prediction-and-Analysis',
        image: one
    },
    {
        id: 2,
        projectName: 'Bayesian Inference',
        projectDesc: 'This is a project that implements Bayesian Inference techniques in Python to perform probabilistic modeling and inference on the effects of oil price on short term US Treasury yields.',
        tags: ['NumPy', 'Pandas', 'PyMC', 'Matplotlib'],
        code: 'https://github.com/aneee004/D.V.S.A.P',
        demo: 'https://github.com/aneee004/D.V.S.A.P',
        image: four
    },
    {
        id: 3,
        projectName: 'W.Y.A.G - Write Yourself A Git',
        projectDesc: 'This is a passion project that implements a simple version of Git in Python to understand the inner workings of Git and version control systems.',
        tags: ['Python', 'Git'],
        code: 'https://github.com/aneee004/wyag',
        demo: 'https://github.com/aneee004/wyag',
        image: three
    },
    {
        id: 4,
        projectName: 'Realtime Streaming Pipeline',
        projectDesc: 'This is a streaming pipeline that processess RTSP streams and performs ML analysis using Apache Spark and Apache Kafka.',
        tags: ['Kafka', 'Spark', 'OpenCV'],
        code: 'https://github.com/aneee004/D.V.S.A.P',
        demo: 'https://github.com/aneee004/D.V.S.A.P',
        image: two
    },
    {
        id: 5,
        projectName: 'Heavy Light Decomposition',
        projectDesc: 'This project is a C++ implementation of the Heavy Light Decomposition algorithm.',
        tags: ['C++', 'DSA', 'Tree'],
        code: 'https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/range_queries/heavy_light_decomposition.cpp',
        demo: 'https://github.com/TheAlgorithms/C-Plus-Plus/blob/master/range_queries/heavy_light_decomposition.cpp',
        image: eight
    },
    {
        id: 6,
        projectName: 'Modified Rik\'s Solver',
        projectDesc: 'This is a MATLAB implementation of the Modified Rik\'s Solver algorithm.',
        tags: ['MATLAB'],
        code: 'https://github.com/aneee004/Modified-Riks-Solver',
        demo: 'https://github.com/aneee004/Modified-Riks-Solver',
        image: seven
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/