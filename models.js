const { DataTypes } = require('sequelize');

function veiculosModel(sequelize){
    const Veiculo = sequelize.define('Veiculo', {
        // Model attributes are defined here
        ocorrencia_id_ocorencia: {
          type: DataTypes.BIGINT
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
        tableName: 'veiculo',
        timestamps: false
      });

      return Veiculo;
}

module.exports = { veiculosModel }


