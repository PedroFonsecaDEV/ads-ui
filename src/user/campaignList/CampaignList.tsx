import React, { useContext, useEffect, useState, useRef } from "react";

import * as _ from "lodash";

import Section from "../../components/section/Section";

import { Text } from "../../components/Text/Text";
import { CAMPAIGN_LIST } from "./lib/CampaignList.queries";
import { useQuery } from "@apollo/react-hooks";

import Table from "../../components/Table/TableComponent";
import { Link } from "react-router-dom";
import { Icon } from "@material-ui/core";

import * as S from "./style/CampaignList.style";



const CampaignList = props => {


    const { match } = props;

    const { loading, error, data } = useQuery(CAMPAIGN_LIST, {
        variables: { id: "f4e8d92e-11b5-470e-8eb5-57e25ebf5ae5" }
    });

    const columns = [
        {
            Header: 'Campaign',
            accessor: 'name',
            Cell: (props) => {
                return (
                    // <Link style={{ textDecoration: "none", color: "rgb(251, 84, 43)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} to={match.url}>
                    <div style={{ textDecoration: "none", color: "rgb(251, 84, 43)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={props.row.original.name}>{props.row.original.name}</div>
                    // </Link>)
                )
            }
        },
        {
            Header: 'Status',
            accessor: 'state',
            Cell: (props) => {
                return props.row.original.state === "active" ? <div title="Active"><S.ActiveSymbol /></div> : <div title={props.row.original.state}><S.PendingSymbol /></div>
            }
        },
        {
            Header: 'Budget',
            accessor: 'budget',
            sortDescFirst: true,
            Cell: (props) => {
                return props.row.original.currency === "USD" ? `$${props.row.original.budget.toFixed(2)}` : `${props.row.original.budget.toFixed(2)} BAT`
            },
        },
        {
            Header: 'Daily Budget',
            accessor: 'dailyBudget',
            sortDescFirst: true,
            Cell: (props) => {
                return props.row.original.currency === "USD" ? `$${props.row.original.dailyBudget.toFixed(2)}` : `${props.row.original.dailyBudget.toFixed(2)} BAT`
            },
        },
        {
            Header: 'Spend',
            accessor: 'spent',
            sortDescFirst: true,
            Cell: (props) => {
                return props.row.original.currency === "USD" ? `$${props.row.original.spent.toFixed(2)}` : `${props.row.original.spent.toFixed(2)} BAT`
            },
        },
        {
            Header: 'Start Date',
            accessor: 'startAt',
            sortDescFirst: true,
            Cell: (props) => {
                return new Date(props.row.original.startAt).toLocaleDateString("en-US")
            },
        },
        {
            Header: 'End Date',
            accessor: 'endAt',
            sortDescFirst: true,
            Cell: (props) => {
                return new Date(props.row.original.startAt).toLocaleDateString("en-US")
            },
        },
        {
            accessor: 'currency',
            Cell: (props) => {
                return <div style={{ display: "flex", cursor: "pointer", color: "rgb(251, 84, 43)" }}><Icon title="Analytics">bar_chart</Icon></div>
            },
        },
    ];

    if (loading) return <></>;

    // console.log(data.campaigns);

    return (
        <div>
            <Section fullWidthChild={true}>
                <Table data={data.advertiser.campaigns} columns={columns} tableWidth={1094} columnCount={8} />
            </Section>
        </div>
    );
}


export default CampaignList;

