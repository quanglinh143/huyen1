import React from 'react'
import nbk1 from '../../../img/nbk1.jpg';
import TextField from '@mui/material/TextField';
import './index.css';
const Show = ({dataReceive,show,showList,setShowList,onHandleShowList}) => {
    console.log('dataReceive',dataReceive)
    console.log('dataReceive',dataReceive.name)
    const listFil=Object.values(dataReceive);
    console.log('listFil',listFil[6])
    return (
        <>
            {show?(
                <div className='w-1/2 bg-[#424242]  ' style={{paddingTop:'14px'}}>
                    <div className='flex justify-center'>
                        <div className='w-11/12  flex gap-4  '>
                            <div className='w-1/2'><img src={dataReceive.img}  style={{width:'100%',height:'220px',objectFit:'cover'}}/></div>
                            <div className='w-1/2 '> 
                                <div className='pb-6 pt-2'>
                                    <TextField
                                        
                                        label="Ten"
                                        value={dataReceive.name}
                                    
                                        
                                    />
                                </div>
                                <div className='pb-6'>
                                    <TextField
                                        
                                        label="Price"
                                        value={dataReceive.price}
                                    />
            
                                </div>
                                <div>
            
                                <div className='pb-6'>
                                    <TextField
                                        
                                        label="type"
                                        value={dataReceive.type}
                                    />
            
                                </div>
                                </div>
            
                            </div>
                            
                        </div>

                    </div>

                    <div className='w-full flex justify-center pt-4 '>
                        <div className='w-11/12 flex justify-between'>
                            <div className=''>
                                <TextField
                                        
                                    label="type"
                                    value={dataReceive.desc}
                                />
            
                            </div>
                            <div className='pb-6'>
                                <input type="date" className='w-60 h-10 px-4'/>
            
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='w-11/12'>
                            <div className='flex justify-between'>
                                <div>Danh muc A</div>
                                <div>Danh sach Sinh vien</div>
                                <div 
                                    className='cursor-pointer'
                                    onClick={()=>setShowList(!showList)}
                                >+</div>
                            </div>
                            {
                                showList?(
                                    <div>
                                        {listFil[6].map((item)=>{
                                                return <div key={item.id}>{item.student}</div>
                                            })}
                                    </div>
                                ):null
                            }
                        </div>
                    </div>
                
            </div>
            ):(
                <div className='w-1/2 bg-gray-400 flex justify-center ' style={{paddingTop:'14px'}}>
                    
                </div>
            )}
        </>
    )
}

export default Show
