/*
 * Copyright (c) 2020.
 * @author (Sari Eka Nur Marifah, Nandhika Kurniasari, Adam Arthur Faizal)
 * @version (5 Juni 2020)
 */

import React, {Component} from 'react'
import fetch from 'isomorphic-unfetch'

class DataKasus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            global: {},
            local: {},
        }

        this.getGlobalData = this.getGlobalData.bind(this)
        this.getLocalData = this.getLocalData.bind(this)
    }

    async componentDidMount() {
        try {
            await this.getGlobalData()
            await this.getLocalData()
        } catch (Error) {
            console.error(Error)
        }
    }

    getGlobalData(){
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('covid-website-kita.now.sh/api/global')}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.setState({
                    global: JSON.parse(data.contents)
                })
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }

    getLocalData(){
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('covid-website-kita.now.sh/api/local')}`)
            .then(response => {
                if (!response.ok) throw new Error(response.statusText)
                return response.json()
            })
            .then(data => {
                this.setState({
                    local: JSON.parse(data.contents),
                })
            })
            .catch(error => {
                console.error(`Error: ${error}`)
            })
    }

    render() {
        return (
            <section id="data-kasus" className="d-flex align-items-center justify-content-center">
                {/* ----- Container ----- */}
                <div className="container">
                    {/* ----- Baris ke-1 ----- */}
                    <section className="row">
                        <section className="col-md-12 text-center"> {/* Ini untuk judul */}
                            <h1 className="display-4 mb-5 mt-5 font-weight-bold"><span
                                id="covid-19">COVID-19</span> Global & National Data</h1>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-1 ----- */}

                    {/* ----- Baris ke-2 -----*/}
                    <section className="row">
                        {/* ---- Kolom ke-1 ----- */}
                        <section className="col-md-4">
                            {/* ----- Card ----- */}
                            <div className="card bg-merah text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL POSITIF</h5>
                                </div>
                                <div className="row no-gutters">
                                    <section className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                                        <img src="/images/sad-u6e.png" className="card-img img-fluid" alt="Sad"/>
                                    </section>
                                    <section className="col-md-8">
                                        <div className="card-body pl-0">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_positif}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                        {/* ----- Akhir dari kolom ke-1 -----*/}

                        {/* ----- Kolom ke-2 ----- */}
                        <section className="col-md-4">
                            {/* ----- Card ----- */}
                            <div className="card bg-hijau text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL SEMBUH</h5></div>
                                <div className="row no-gutters">
                                    <section className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                                        <img src="/images/happy-ipM.png" className="card-img img-fluid" alt="Happy"/>
                                    </section>
                                    <section className="col-md-8">
                                        <div className="card-body pl-0">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_sembuh}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                        {/* ----- Akhir dari kolom ke-2 ----- */}

                        {/* ----- Kolom ke-3 ----- */}
                        <section className="col-md-4">
                            {/* ----- Card ----- */}
                            <div className="card bg-abu text-white shadow rounded-pill overflow-hidden mb-3">
                                <div className="card-header p-1 text-center"><h5 className="m-0">TOTAL MENINGGAL</h5>
                                </div>
                                <div className="row no-gutters">
                                    <section className="col-md-4 d-flex flex-column align-items-center justify-content-center">
                                        <img src="/images/emoji-LWx.png" className="card-img img-fluid" alt="Emoji"/>
                                    </section>
                                    <section className="col-md-8">
                                        <div className="card-body pl-0">
                                            <h2 className="card-title font-weight-bold mb-0">{this.state.global.global_meninggal}</h2>
                                            <p className="card-text">Orang</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </section>
                        {/* ----- Akhir dari kolom ke-3 ----- */}
                    </section>
                    {/* ----- Akhir dari baris ke-2 ----- */}

                    {/* ----- Baris ke-3 ----- */}
                    <section className="row">
                        <section className="col-md-12">
                            {/* ----- Card ----- */}
                            <div className="card bg-biru rounded-lg shadow">
                                <div className="card-header text-white d-flex flex-row justify-content-center">
                                    <h1 className="m-0 mr-3">INDONESIA</h1>
                                    <img src="/images/Bendera-Indonesia.png" className='bendera-indonesia'
                                         alt="Bendera Indonesia"/>
                                </div>
                                <div className="card-body">
                                    {/* ----- Baris ke-1 didalam Baris ke-3 ----- */}
                                    <section className="row">
                                        {/* ----- Kolom ke-1 ----- */}
                                        <section className="col-md-3">
                                            {/* ----- Card ----- */}
                                            <div className="card rounded-pill border-danger shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-danger mb-0">{this.state.local.local_positif}</h3>
                                                    <p className="card-text">POSITIF</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* ----- Akhir dari kolom ke-1 ----- */}

                                        {/* ----- Kolom ke-2 ----- */}
                                        <section className="col-md-3">
                                            {/* ----- Card ----- */}
                                            <div className="card rounded-pill border-warning shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-warning mb-0">{this.state.local.local_dirawat}</h3>
                                                    <p className="card-text">DALAM PERAWATAN</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* ----- Akhir dari kolom ke-2 ----- */}

                                        {/* ----- Kolom ke-3 ----- */}
                                        <section className="col-md-3">
                                            {/* ----- Card ----- */}
                                            <div className="card rounded-pill border-success shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-success mb-0">{this.state.local.local_sembuh}</h3>
                                                    <p className="card-text">SEMBUH</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* ----- Akhir dari kolom ke-3 ----- */}

                                        {/* ----- Kolom ke-4 ----- */}
                                        <section className="col-md-3">
                                            {/* ----- Card ----- */}
                                            <div className="card rounded-pill border-dark shadow mb-3">
                                                <div
                                                    className="card-body d-flex flex-column align-items-center justify-content-center">
                                                    <h3 className="card-title font-weight-bold text-dark mb-0">{this.state.local.local_meninggal}</h3>
                                                    <p className="card-text">MENINGGAL</p>
                                                </div>
                                            </div>
                                        </section>
                                        {/* ----- Akhir dari kolom ke-4 -----*/}
                                    </section>
                                    {/* ----- Akhir dari baris ke-1 didalam baris ke-3 ----- */}
                                </div>
                            </div>
                        </section>
                    </section>
                    {/* ----- Akhir dari baris ke-3 -----*/}
                </div>
                {/* ----- Akhir dari container -----*/}
            </section>
        );
    }
}

export default DataKasus
