(function () {
  const ratio = window.devicePixelRatio;
  const container = document.querySelector('.generator-container');
  const canvas = document.querySelector('#inspo-generator')
  const context = canvas.getContext('2d');
  const download = document.querySelector('#download');
  const refresh = document.querySelector('#refresh');

  context.scale(ratio, ratio);

  const img = new Image();
  const nextImg = new Image();
  const logo = new Image();
  let fontSize = 72;

  img.crossOrigin = "Anonymous";
  logo.crossOrigin = "Anonymous";

  const logoUrl = "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64441258f7fdec5ff085d3af_DBC_Logo.png";
  logo.src = logoUrl;

  const images = [
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d52a2499f1e8150d6_151_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755dd327af8e953f76c7_149_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d8acec511dbdb8d10_148_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d8acec525a2db8d09_145_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d24de9a2c7acf5fe7_150_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d9c183eddcf6db36f_152_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d24de9a4477cf5fdb_146_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d9c183ef4ef6db36e_147_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755d108a144c243e0c4a_142_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c24de9a68a1cf5fda_133_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c52a2496a208150c3_137_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c1c8ecc623a252542_132_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c415fbb51f6d9aaf7_144_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755cedd0d401083a60c4_140_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755ce38bb76b1e0aa634_141_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c0445a27b5681da84_135_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755cedd0d442b63a60c3_134_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c1c2d370f54dee980_139_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c1c2d370d67dee97f_138_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c60d48b747e174d83_136_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755c9c183e6e516db36b_143_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755b4418197e8a8eb881_131_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755b43c0ec018e935a48_117_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a108a1407963e0bd4_119_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a43c0ecb7de935a46_120_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a52a24931a28150bc_118_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a9bde5934bf8a575d_129_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a52a24980e58150bb_122_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755ae38bb77c450aa616_130_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a60d48bd8dc174d6e_126_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755ad327af62993f7693_121_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a0445a2f8a481da7e_128_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a60d48b352f174d6d_127_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a9c183ea9b26db363_123_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755a7dfcba18747ecebb_125_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457559bbb9276d6bb24103_124_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575590445a20a7681da77_116_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575581c8eccabf0252396_110_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575585abaf59f45d09e22_109_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755744181963418eb82f_105_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457557103dd22bd1a5da38_108_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575579bde596f488a5737_115_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755752a249168a8150a8_103_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457557108a1448853e09c9_102_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755731b07220d506a6b6_107_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575577dfcba727b7ece84_106_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575571c8eccd518252388_114_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457557103dd23e82a5da37_104_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457557415fbb62ead9aa6e_113_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575570445a2619f81da44_112_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755769ddc50e17886123_099_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575567dfcbac89a7ece6d_101_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575569c183e5e446db358_111_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457555edd0d426703a6014_100_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575537dfcba98887ece3d_089_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755343c0ec01e8935a1e_097_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575529bde5947b88a5708_088_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457552a11fb56e1a170974_094_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575525abaf57850d09db3_092_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575529c183e3efb6db2db_090_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755260d48b7537174ce6_098_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457552441819f7688eb7ce_086_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575521c2d3793b4dee90f_087_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755231b0722f0e06a672_096_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755231b072086006a671_091_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457552e83daf7c01442bf5_095_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755231b072f3d706a670_093_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575529c183e6aca6db2da_085_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575518acec5fa94db8c32_084_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457551e38bb7a8620aa5c4_083_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575511c2d37bcf5dee908_071_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755144181998628eb7cd_073_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575511c2d375026dee907_074_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575511c8eccec4525234a_081_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755131b0727dba06a66c_075_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575514d6a1ecb2b9d2d81_079_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457551e83daf21ba442bca_077_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755152a249b190815062_078_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755043c0ec35c3935a0b_080_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445755090f999481970d6cf_076_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575509bde5937d98a5703_082_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457550d327af6e113f762a_072_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457550a11fb56e34170969_070_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575508acec59da3db8c26_069_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575501c2d378fffdee903_068_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754fd327af9df33f7608_064_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f60d48b9b1b174ccc_062_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f31b0724c2806a664_065_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f31b072224d06a663_067_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f31b07218c906a662_058_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f415fbb4722d9a998_059_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f103dd203d6a5d945_061_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f103dd27f11a5d944_060_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f441819e8cc8eb7b0_063_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754f9bde597af58a5702_066_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754fedd0d4046f3a5fb1_057_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754e441819a3708eb7af_056_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754d5abaf59398d09d9c_055_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754c52a24933d5815040_054_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754c103dd2d763a5d7b7_053_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b5abaf57615d09d98_052_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b4d6a1e54579d2cee_041_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b90f9996e5770d6b1_050_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b60d48b00db174cb0_046_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b43c0ecb7379359bd_048_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754b9bde596af28a56fc_044_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754ba11fb52f491708f0_047_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a5abaf5bacfd09d97_051_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a108a140f9c3e08f5_043_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a441819d4a48eb747_042_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754ad327af6b453f75bd_045_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a7dfcba30d67ecdc0_049_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a415fbbd94fd9a931_038_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754aa11fb5584f1708d5_040_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754a4d6a1ebb2e9d2ce7_039_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575491c2d37de76dee89a_037_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457549d327af6fc23f75b8_036_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457549edd0d493023a5f42_032_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754952a2497dd081502c_031_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575499bde594bef8a56f7_024_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754952a249709d81502b_035_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457549bbb927e837b23da4_029_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575470445a2442981d930_033_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754744181966c68eb730_027_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457547d327af97ee3f75a4_028_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457547415fbbf2d9d9a8c7_023_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457547103dd20916a5d789_030_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575461c8eccdcc92522d7_034_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754643c0ec0a69935983_021_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754652a24915e2815024_026_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457546e83dafc6cb442ae3_022_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754543c0ec890f93597f_020_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575458acec58ec0db8baa_006_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575448acec57acddb8ba6_004_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754452a24963e981501d_019_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754490f9997f6670d657_013_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457544edd0d4fd943a5edf_017_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457544103dd21550a5d784_008_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575441c2d371530dee5e4_005_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575445abaf51cedd09d31_015_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575447dfcba84ff7ecd18_014_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457544a11fb561ca1708ab_001_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754424de9a8cf8cf5d15_012_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754490f99919be70d656_010_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754352a249385c814fec_011_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/644575439bde5945bf8a551b_009_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457543e83dafd88e442ad8_016_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/6445754324de9a44edcf5d0e_007_Final.webp",
    "https://webflow-files-prod.global.ssl.fastly.net/636685de8bef740025b93516/64457543103dd254c3a5d77d_018_Final.webp"
  ]

  const phrases = [
    "I Am Loving Awareness",
    "I am trying my best",
    "Who am I?",
    "We are all trying our best",
    "Society is better off now",
    "Heaven is on earth now",
    "I am fulfilled at work",
    "I am fulfilled in my life",
    "Everything I desire is here and now",
    "All of my dreams are alive",
    "Wellness is here",
    "Everything is the moon and stars and I am possibility",
    "I am a cosmic starburst of infinite possibilities",
    "I radiate love and light in all directions",
    "I am a magical being of pure energy",
    "My thoughts are vibrations that create my reality",
    "My mind is constantly expanding and evolving",
    "I am in harmony with the universe",
    "I am at peace with myself and my Venmo charges",
    "I am one with all that is",
    "I am a being of pure love and light",
    "I am open to receiving guidance from my higher self",
    "I am in alignment with my soul’s purpose",
    "I am open to receiving divine guidance and wisdom",
    "I am a conduit for the creative energy of the universe",
    "I am illuminated with love",
    "My taxes are not a problem",
    "People desire more of me",
    "I am not my income",
    "My text messages are not left on read",
    "If u want to see me come see me",
    "The first thing you need to know is that the internet is amazing",
    "We are alive!",
    "We live in a dream world created by the machines",
    "Hi! I am so unhappy haha!",
    "Actually, life is beautiful and you do have the time",
    "I am very sensitive to beautiful things",
    "I belong deeply to myself",
    "Pretty ok at the moment",
    "It was revealed to me in a dream",
    "Caught between a dream and a nightmare",
    "I am here. I am here. I am here.",
    "To plant a garden is to believe in the future",
    "Did you ever grow anything in the garden of your mind?",
    "Everything is alive!",
    "Everybody should sit by a little stream and listen",
    "I contribute to the higher consciousness of the cosmos",
    "You are a flower bathed in warm sunlight",
    "The vibe for today is childlike wonder",
    "They thought about tall oak trees for some amount of time",
    "I have no more ambition, only desire",
    "There is such a strong connection, there is no end to it",
    "Your destiny awaits!",
    "Watch the sun set and don’t take a picture of it",
    "The willow tree and me, we’re made of the same stuff",
    "Tomorrow will take care of itself",
    "I am constantly trying to explain something unexplainable",
    "I’m thinking we are all going to be ok",
    "There is nothing in the silence to be frightened of",
    "The clarity that silence is the guardian of",
    "Why is this so familiar?",
    "Wishing you a safe return back to yourself",
    "The softest of landings awaits",
    "Every now and then I'm insecure",
    "Seize the day, wear a big, happy smile on your face",
    "In silence there is truth, there is beauty, there is love",
    "Play me a song to set me free",
    "Naivety succeeds",
    "Write a song, I’ll sing along",
    "I know that you are on my side forever",
    "You know everything around us is alive",
    "Let nature be your teacher",
    "There is no threat here",
    "You are not alone in this world. We are all one",
    "Tomorrow never comes until it's too late",
    "Breathe in the healing love of the universe",
    "Let the changes in",
    "All I have to give you is a love that never dies",
    "I’d rather be slowly consumed by the earth",
    "You are your own gravitational field",
    "The don’t know I have 53 followers on my Are.na channel",
    "Your breath is like a kind of alchemy",
    "The symptom of the universe is written in your eyes",
    "Making friends is easy if you let it be",
    "Heaven is a place where nothing ever happens ",
    "When this kiss is over, it will start again",
    "It's hard to imagine that nothing at all could be so exciting",
    "You can emerge whenever you are ready",
    "Sooner or later you and I will turn into pure light",
    "I am very sensitive to beautiful things",
    "What if we all just gave up?",
    "It might not feel different but it is",
    "Every action is a prayer",
    "This is the most perfect place to be",
    "Giving fucks isn’t always easy",
    "Not every step we take will be forwards ",
    "I feel the hands but I don't see anyone",
    "Some holy ghost keeps me hanging on",
    "Everything is terrifying and everything is beautiful",
    "If you want to look, signs are everywhere",
    "Every song is a dance",
    "Your subconscious is a beautiful forest",
    "Your metamorphosis has only just begun",
    "Your thoughts and feelings have an electromagnetic reality",
    "I would prefer not to",
    "And the next second we are in another moment ",
    "I know that I know nothing",
    "My flame still burns brightly ",
    "Do you realize?",
    "We live in a beautiful world",
    "You can always log off",
    "You are a part of nature too beautiful to know",
    "We need nature, nature does not need us",
    "Breathe in the healing love of the Universe",
    "They can’t love you if they don’t know you",
    "Greet each day with a smile and an open heart",
    "I have a number of reasons to be happy",
    "Time is a unknowable but beautiful void",
    "It will take care of all of us",
    "Everything is in it’s right place",
    "You are delicately connected to everything you see",
    "Let love split your heart open",
    "You might be holding the last light I see",
    "If you listen you can hear the first hour of the world",
  ]

  let phraseIndex = Math.floor(Math.random() * phrases.length);
  let imgIndex = Math.floor(Math.random() * images.length);
  let nextImgIndex = Math.floor(Math.random() * images.length);

  img.src = images[imgIndex];
  console.log(images.length)
  nextImg.src = images[nextImgIndex];

  const setCanvasSize = () => {
    canvas.width = container.clientWidth * ratio;
    canvas.height = container.clientHeight * ratio;
    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientHeight}px`;
  }

  const handleResize = () => {
    setFontSize();
    setCanvasSize();
    draw();
  }

  const setFontSize = () => {
    if (window.innerWidth < 768) {
      fontSize = 30 * ratio;
    } else if (window.innerWidth < 1200) {
      fontSize = 48 * ratio;
    } else {
      fontSize = 72 * ratio;
    }
  }

  const randomize = () => {
    const oldPhraseIndex = phraseIndex;

    imgIndex = nextImgIndex;
    nextImgIndex = Math.floor(Math.random() * images.length);

    nextImg.src = images[nextImgIndex];

    while (phraseIndex === oldPhraseIndex) {
      phraseIndex = Math.floor(Math.random() * phrases.length);
    }

    draw();
  }

  const addEventListeners = () => {
    window.addEventListener('resize', handleResize);
    refresh.addEventListener('click', randomize);
    download.addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = 'dbc-inspiration.png';
      link.href = canvas.toDataURL()
      link.click();
    })
  }

  const drawLogo = () => {
    const width = window.innerWidth < 1200 ? (logo.width * 0.2) * ratio : logo.width * ratio * 0.34;
    const height = window.innerWidth < 1200 ? (logo.height * 0.2) * ratio : logo.height * ratio * 0.34;
    const offset = window.innerWidth < 1200 ? 0.87 : 0.89;
    drawImageProp(context, logo, canvas.width / 2 - width / 2, canvas.height * offset, width, height, 0.5, 0.5);
  }

  const draw = () => {
    img.src = images[imgIndex];
    img.onload = () => {
      drawImageProp(context, img, 0, 0, canvas.width, canvas.height, 0.5, 0.5)
      drawText();
      drawLogo();
    }
  }

  const drawText = () => {
    context.font = `italic ${fontSize}px Helvetica`;
    context.fillStyle = `rgba(255, 230, 0, 1)`;
    context.letterSpacing = "-0.02em";

    const offset = window.innerWidth < 1200 ? 0.8 : 0.84;

    const black = `rgba(0, 0, 0, 1)`

    const textWidth = context.measureText(phrases[phraseIndex]).width;
    const shadowXOffset = window.innerWidth < 768 ? 3 : 5.8;
    const shadowYOffset = window.innerWidth < 768 ? 2 : 3.9;
    const strokeWidth = window.innerWidth < 768 ? 1 : 2;

    if (textWidth > canvas.width * 0.75) {
      const text = phrases[phraseIndex].split(' ');
      const firstLine = text.slice(0, text.length / 2).join(' ');
      const secondLine = text.slice(text.length / 2, text.length).join(' ');
      const firstLineX = ((canvas.width / 2) - (context.measureText(firstLine).width / 2));
      const secondLineX = ((canvas.width / 2) - (context.measureText(secondLine).width / 2));


      const y = (canvas.height * offset);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = shadowXOffset;
      context.shadowOffsetY = shadowYOffset;
      context.fillText(firstLine, firstLineX, y - (fontSize * 1.05));
      context.fillText(secondLine, secondLineX, y);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fillStyle = black;
      context.lineWidth = strokeWidth;
      context.strokeStyle = black;
      context.strokeText(firstLine, firstLineX, y - (fontSize * 1.05));
      context.strokeText(secondLine, secondLineX, y);
    } else {
      const x = ((canvas.width / 2) - (textWidth / 2));
      const y = (canvas.height * offset);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = shadowXOffset;
      context.shadowOffsetY = shadowYOffset;
      context.fillText(phrases[phraseIndex], x, y);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fillStyle = black;
      context.lineWidth = strokeWidth;
      context.strokeStyle = black;
      context.strokeText(phrases[phraseIndex], x, y);
    }

  }

  const drawImageProp = (ctx, img, x, y, w, h, offsetX, offsetY) => {
    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   // new prop. width
      nh = ih * r,   // new prop. height
      cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
  }

  const initialize = () => {
    setFontSize();
    setCanvasSize();
    addEventListeners();
    draw();
  }

  initialize();

})()