/*
 * @Descripttion: 
 * @version: 
 * @Author: JesterCheung
 * @Date: 2022-08-24 08:53:56
 * @LastEditors: JesterCheung
 * @LastEditTime: 2022-08-24 10:41:03
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
            source: {
                data: data,
                joinBy: {
                  sourceField: 'adcode',
                  geoField: 'adcode',
                },
              },
              viewLevel: {
                level: 'country',
                adcode: 100000,
              },
              autoFit: true,
              color: {
                field: 'value',
                value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
                scale: { type: 'quantize' },
              },
              style: {
                opacity: 1,
                stroke: '#ccc',
                lineWidth: 0.6,
                lineOpacity: 1,
              },
              chinaBorder: {
                // 国界
                national: { color: '#ccc', width: 1, opacity: 1 },
                // 争议
                dispute: {
                  color: '#ccc',
                  width: 1,
                  opacity: 0.8,
                  dashArray: [2, 2],
                },
                // 海洋
                coast: { color: '#ccc', width: 0.7, opacity: 0.8 },
                // 港澳
                hkm: { color: 'gray', width: 0.7, opacity: 0.8 },
              },
              label: {
                visible: true,
                field: 'name',
                style: {
                  fill: '#000',
                  opacity: 0.8,
                  fontSize: 10,
                  stroke: '#fff',
                  strokeWidth: 1.5,
                  textAllowOverlap: false,
                  padding: [5, 5],
                },
              },
              state: {
                active: { stroke: 'black', lineWidth: 1 },
              },
              tooltip: {
                items: ['name', 'adcode', 'value'],
              },
              zoom: {
                position: 'bottomright',
              },
              legend: {
                position: 'bottomleft',
              },
        })
        choropleth.addToScene(scene)
    }, [])
    return <div id='chinaMap' style={{ minHeight: '500px', justifyContent: 'center', posistion: 'relative' }}/>
}

export default Maps;