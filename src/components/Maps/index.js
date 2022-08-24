/*
 * @Descripttion: 
 * @version: 
 * @Author: JesterCheung
 * @Date: 2022-08-24 08:53:56
 * @LastEditors: JesterCheung
 * @LastEditTime: 2022-08-24 09:30:10
 */
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Choropleth } from '@antv/l7plot';
import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import data from './geo/china.json'
const Maps = props => {
    useEffect(() => {
        const scene = new Scene({
            id: 'chinaMap',
            map: new GaodeMap({
                style: 'dark',
                center: [120.19382669582967, 30.258134],
                zoom: 3,
                pitch: 0,
            })
        })
        const choropleth = new Choropleth({
            source:{
                data:data,
                joinBy:{
                    sourceField:'adcode',
                    geoField:'adcode'
                },
            },
            viewLevel:{
                level:'country',
                adcode:100000,
                granularity:'city'
            },
            autoFit:true,
        })
        choropleth.addToScene(scene)
    }, [])
    return <div id='chinaMap' style={{ minHeight: '500px', justifyContent: 'center', posistion: 'relative' }}></div>
}

export default Maps;