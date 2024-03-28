import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
    {
        bookName: "The dating playboy",
        totalPages: 880,
    },
    {
        bookName: "Family Code",
        totalPages: 1528,
    },
    {
        bookName: "Why Do You Hate Money",
        totalPages: 581,
    },
    {
        bookName: "loving Jesus More",
        totalPages: 379,
    },
    {
        bookName: "Art of Good Conversation",
        totalPages: 977,
    },
    {
        bookName: "Spine Of The Dragon",
        totalPages: 1278,
    }
];

const ReadPages = () => {
    return (
        <div className='mt-10 bg-base-200 p-6 rounded-xl'>
            <h2 className='mt-4 mb-8 text-center font-bold text-2xl'>Total Pages of Each Book</h2>

            <ResponsiveContainer aspect={3}>
                <BarChart data={data} width={1000} height={800}>
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#59C6D2"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReadPages;