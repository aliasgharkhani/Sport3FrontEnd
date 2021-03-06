import React, { Component } from 'react'
import {Table} from 'semantic-ui-react'


export default class PlayerInfoTable extends Component{
    getTableData () {

        const image_style = {
            height: '16vh',
            width: '10vw',
        };
        let active = false;
        return (
            this.props.playerInfo['tableData'].map(({featureName, featureValue}) => {
                    active = !active
                    if (featureName === 'image') {
                        return (
                            <Table.Header>
                            <Table.Row style={{textAlign: 'center'}}>
                                <Table.HeaderCell colSpan='2'><img style={image_style} src={require('../../../../Backend/images/' + featureValue)}/></Table.HeaderCell>
                                {/*<Table.Cell style={{textAlign: 'center'}}>{this.props.playerInfo['tableName']}</Table.Cell>*/}
                            </Table.Row>
                            </Table.Header>
                        )
                    }
                    return (
                        <Table.Row active={active} columns={2}>
                            <Table.Cell>{featureName}</Table.Cell>
                            <Table.Cell>{featureValue}</Table.Cell>

                        </Table.Row>
                    );
                }
            )

        )
    };
    render() {
        return (
            <Table>
                    {this.getTableData()}
            </Table>
        );
    }
}