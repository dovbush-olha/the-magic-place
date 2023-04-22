const fs = require('node:fs/promises');
const { sequelize } = require('../libraries/mysql');
const Spell = require('../models/Spell');

const populate = async () => {

  try {
    const dataEn = await fs.readFile('DB/dataEn.json', { encoding: 'utf8' });
    const dataUk = await fs.readFile('DB/dataUk.json', { encoding: 'utf8' });
    const spellsEn = JSON.parse(dataEn);
    const spellsUk = JSON.parse(dataUk);


    const requestFromFile = async () => {
      try {
        const result = await sequelize.transaction(async t => {
          for (let i = 0; i < spellsEn.length; i++) {

            await Spell.create({
              UK: spellsEn[i],
              EN: spellsUk[i],
            }, { transaction: t });
          }

        });
        console.log('result', result);
      } catch (e) {
        console.error(e);
      }
    }

    await requestFromFile();

  } catch (err) {
    console.error(err);
  }
};

module.exports = populate;
