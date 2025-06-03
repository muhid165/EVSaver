const chargingStation = require('../models/chargingStation');

const createStation = async(req,res) => {
    try {
        const { name, location, status, powerOutput, connectionType } = req.body;
        const newStation = await chargingStation.create({
            name,
            location,
            status,
            powerOutput,
            connectionType,
            createdBy: req.user
        });
        res.status(201).json(newStation)
    } catch (error) {
        res.status(500).json({message: "Create Failed", error: error.message});
    }
};


const getAllStation = async(req,res) => {
    try {
        const stations = await chargingStation.find();
        if(!stations || stations.length === 0) return res.status(404).json({message: "No stations found "})

        res.status(200).json(stations);
    } catch (error) {
        res.status(500).json({message: "Error fetching stations ",error: error.message});
    }
};


const updateStation = async(req,res) => {
    try {
        const station = await chargingStation.findById(req.params.id);
        if(!station) return res.status(404).json({message: "Station not found!"});

        if (station.createdBy.toString() !== req.user){
            return res.status(403).json({message: "You are not authorized to update this station"});
        }

        Object.assign(station, req.body);
        await station.save();

        res.json(station);
    } catch (error) {
        res.status(500).json({ message: "Update failed", error: error.message });
    }
};


const deleteStation = async(req,res) => {
    try {
        const station = await chargingStation.findById(req.params.id);
        if(!station) return res.status(404).json({message: "Station not found!"});

        if (station.createdBy.toString() !== req.user){
            return res.status(403).json({message: "You are not authorized to delete this station"});
        };
        await station.deleteOne();

        res.json({ message: "Station deleted successfully "});
    } catch (error) {
        res.status(500).json({ message: "Delete failed", error: error.message });
    }
};

module.exports = {
    createStation,
    getAllStation,
    updateStation,
    deleteStation
};

