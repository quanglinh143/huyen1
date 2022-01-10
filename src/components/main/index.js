import React,{useState} from 'react'
import Product from './left'
import Show from './right'
import nbk1 from '../../img/nbk1.jpg';
const data1=[
    {
        id:1,
        img:nbk1,
        desc:'ReactJS',
        type:'phim',
        name:'Minh Nghia',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Nu '
            },
            {
                id:2,
                student:'student2 Nu '
            },
        ]
    },
    {
        id:2,
        img:nbk1,
        desc:'PHP',
        type:'dev',
        name:'Quang Linh',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Quang Linh '
            },
            {
                id:2,
                student:'student2 Quang Linh '
            },
        ]
    },
    {
        id:3,
        img:nbk1,
        desc:'NodeJS',
        type:'phim',
        name:'Huong Quynh',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Huong Quynh '
            },
            {
                id:2,
                student:'student2 Huong Quynh '
            },
        ]
    },
    {
        id:4,
        img:nbk1,
        desc:'C#',
        type:'phim',
        name:'Lan',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Lan '
            },
            {
                id:2,
                student:'student2 Lan '
            },
        ]
    },
    {
        id:5,
        img:nbk1,
        desc:'C++',
        type:'phim',
        name:'Quan',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Quan '
            },
            {
                id:2,
                student:'student2 Quan '
            },
        ]
    },
    {
        id:6,
        img:nbk1,
        desc:'Mongoose',
        type:'phim',
        name:'Quang Anh',
        price:143000,
        list:[
            {
                id:1,
                student:'student1 Quang Anh '
            },
            {
                id:2,
                student:'student2 Quang Anh '
            },
        ]
    }
]
const Course = () => {
    const [data,setData]=useState(data1)
    const [dataReceive,setDataReceive]=useState({})
    const [show,setShow]=useState(false);
    const [showList,setShowList]=useState(false);
    const [addItem,setAddItem]=useState(false);
    const [editItem,setEditItem]=useState(false);
    const [num,setNum]=useState(null);


    const [valueName,setValueName]=useState('');
    const [valuePrice,setValuePrice]=useState('');
    const [valueType,setValueType]=useState('');
    const [valueDesc,setValueDesc]=useState('');
    const [valueImg,setValueImg]=useState('');

    console.log('onHandleEdit',editItem)
   const dataSubmit=(item)=>{
    console.log('dataSubmit',item)
    setData((prev)=>{
        return [...prev,item]
    })
    // data1.push(item)
   }

    const onHandleDataReceive=(item)=>{
        setDataReceive(item)
        setShow(true)
    }
    const onHandleRemove=(item)=>{
        setData((prev)=>{
            return prev.filter((fil)=>{
                return fil.id!==item
            })
        })
    }

    const onHandleEdit=(item)=>{
        console.log('Toan sp',item)
        const a = data.filter((item_2) => {
            return item_2.id === item
        })
        setValueName(a.name)
        
        setEditItem(true);
        setAddItem(false);
    
        // console.log(typeof item)
        
        // if(item?.name){
        //     const exist=data.filter((item)=>{
        //         return item.id!==num
        //     })
        //     console.log('exist',exist)
        //     exist.push(item)
        //     setData(exist)
        //     setValueName('')
        // setValuePrice('')
        // setValueType('')
        // setValueDesc('')
        // setValueImg('')
        // }else{
        //     // setNum(item)
        //     let dataEdit=data.filter((fil)=>{
        //         return fil.id===item
        //     })
        //     setValueName(dataReceive.name)
        //     setDataReceive(dataEdit)
            
        // }
        
            // setValueDesc(dataEdit.desc)
       
        
        
    }

    const onHandleShowList=(item)=>{
        // console.log('onHandleShowList',item)
    }
    return (
        <div className='flex gap-8'>
            <Product 
                data={data} 
                onHandleRemove={onHandleRemove} 
                onHandleDataReceive={onHandleDataReceive} 
                addItem={addItem} setAddItem={setAddItem} 
                onHandleEdit={onHandleEdit}
                editItem={editItem}
                setEditItem={setEditItem}
            />
            <Show 
                dataReceive={dataReceive} 
                show={show} showList={showList} 
                setShowList={setShowList} 
                onHandleShowList={onHandleShowList} 
                addItem={addItem}
                editItem={editItem}
                dataSubmit={dataSubmit}
                onHandleEdit={onHandleEdit}
                valueName={valueName}
                valuePrice={valuePrice}
                valueType={valueType}
                valueDesc={valueDesc}
                valueImg={valueImg}
                setValueName={setValueName}
                setValuePrice={setValuePrice}
                setValueType={setValueType}
                setValueDesc={setValueDesc}
                setValueImg={setValueImg}


            
            />
        </div>
    )
}

export default Course
