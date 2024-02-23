import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import jsontext from '../../global_texts_and_design/Global.json'
//@ts-ignore
const BlindStructure01 = ({route, navigation}) => {
  return (<>
    <SafeAreaView>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{jsontext.BlindStructure.Level}</DataTable.Title>
            <DataTable.Title>{jsontext.BlindStructure.Time}</DataTable.Title>
            <DataTable.Title>{jsontext.BlindStructure.Blinds}</DataTable.Title>
          </DataTable.Header>
        </DataTable>
         
        <DataTable.Row>
          <DataTable.Cell>
            <Text>{jsontext.BlindStructure.footer01}</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>{jsontext.BlindStructure.footer02}</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text>{jsontext.BlindStructure.footer03}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </View>

    </SafeAreaView>
  </>)
}

export default BlindStructure01

// Slider:
// blind level length switch
// if OFF go to normal 3minutes
// icon in the slider,
// switch
// 3m 5m 7m
// Blind Structure >