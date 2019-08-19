module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });

  Hashtag.associate = (db) => {
    // 아래같은 다대다 관계는 두 테이블 사이에 매핑 테이블이 생기는데
    // 그 테이블 이름을 PostHashtag로 설정
    db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
  };
  return Hashtag;
};
