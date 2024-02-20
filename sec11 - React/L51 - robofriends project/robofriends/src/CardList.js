import React from 'react';
import Card from './Card';

const CardList = ({profileDatas}) => {
    // const cardArray = profileDatas.map((user, i ) => {
    //     return (
    //         <Card 
    //             key={i} 
    //             id={profileDatas[i].id} 
    //             name={profileDatas[i].name} 
    //             email={profileDatas[i].email}
    //         />
    //     );
    // })

    return (
        <div>
            {/* <Card id={profileDatas[0].id} name={profileDatas[0].name} email={profileDatas[0].email}/>
            <Card id={profileDatas[1].id} name={profileDatas[1].name} email={profileDatas[1].email}/>
            <Card id={profileDatas[2].id} name={profileDatas[2].name} email={profileDatas[2].email}/> */}

            {/* {cardArray} */}

            {
                profileDatas.map((user, i ) => {
                    return (
                        <Card 
                            key={i} 
                            id={profileDatas[i].id} 
                            name={profileDatas[i].name} 
                            email={profileDatas[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;