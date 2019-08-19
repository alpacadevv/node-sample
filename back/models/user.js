module.exports = (sequelize, DataTypes) => {
  // Define User table
  const User = sequelize.define('User', {
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    // charset과 collate를 이렇게 설정해줘야 한글이 저장됨
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  // 테이블간에 관계를 정의(join 같은 느낌)
  User.associate = (db) => {
    db.User.hasMany(db.Post, { as: 'Posts' }); // 한 사용자가 여러 포스트 소유 가능
    db.User.hasMany(db.Comment); // 한 사용자가 여러 코멘트 소유 가능
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
    // 자바스크립트 객체에서 구별하는 이름이 as고 foreignKey는 디비에서 구별하는 이름
    // 조심해야할것
    // follower면 following을 가리켜야함
    // following이면 follower를 가리켜야함
    // 반대로 쓰는 foreignKey가 남의 테이블 id를 가리키기 때문
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' });
    db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' });
  };

  return User;
};