import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const Results = ({ route }) => {
  let { pointsV, pointsHZ, pointsG, pointsCH, pointsAH, imageDisease } =
    route.params;
  const [riskLevel, setRiskLevel] = useState("");
  const [riskNum, setRiskNum] = useState();
  // Use state to manage the background image
  const [image, setImage] = useState();
  const [asset, setAsset] = useState();
  const [color, setColor] = useState();
  const [disease, setDisease] = useState("");
  const [riskHZ, setRiskHZ] = useState();
  const [riskV, setRiskV] = useState();
  const [riskCH, setRiskCH] = useState();
  const [riskAH, setRiskAH] = useState();

  useEffect(() => {
    let points = pointsG;
    let newHZ = ((pointsHZ + pointsG) / 140) * 100;
    let newV = ((pointsV + pointsG) / 140) * 100;
    let newCH = ((pointsCH + pointsG) / 140) * 100;
    let newAH = ((pointsAH + pointsG) / 140) * 100;
    newHZ = ~~newHZ;
    newV = ~~newV;
    newCH = ~~newCH;
    newAH = ~~newAH;
    console.log("PointsHZ: ", newHZ);
    console.log("PointsV: ", newV);
    console.log("PointsCH: ", newCH);
    console.log("PointsAH: ", newAH);
    setRiskHZ(newHZ);
    setRiskV(newV);
    setRiskAH(newAH);
    setRiskCH(newCH);
    if (pointsHZ > pointsV) {
      if (pointsHZ > pointsCH) {
        if (pointsHZ > pointsAH) {
          points += pointsHZ;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Shingles");
        } else if (pointsHZ < pointsAH) {
          points += pointsAH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Acute Hives");
        } else {
          points += pointsHZ;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Shingles & Acute Hives");
        }
      } else if (pointsHZ < pointsCH) {
        if (pointsCH > pointsAH) {
          points += pointsCH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Chronic Hives");
        } else if (pointsCH < pointsAH) {
          points += pointsAH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Acute Hives");
        } else {
          points += pointsCH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Chronic Hives & Acute Hives");
        }
      } else {
        points += pointsCH;
        points = (points / 140) * 100;
        points = ~~points;
        setDisease("Chronic Hives & Shingles");
      }
    } else if (pointsHZ < pointsV) {
      if (pointsV > pointsCH) {
        if (pointsV > pointsAH) {
          points += pointsV;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Vitiligo");
        } else if (pointsV < pointsAH) {
          points += pointsAH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Acute Hives");
        } else {
          points += pointsV;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Vitiligo & Acute Hives");
        }
      } else if (pointsV < pointsCH) {
        if (pointsCH > pointsAH) {
          points += pointsCH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Chronic Hives");
        } else if (pointsCH < pointsAH) {
          points += pointsAH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Acute Hives");
        } else {
          points += pointsCH;
          points = (points / 140) * 100;
          points = ~~points;
          setDisease("Chronic Hives & Acute Hives");
        }
      } else {
        points += pointsCH;
        points = (points / 140) * 100;
        points = ~~points;
        setDisease("Chronic Hives & Vitiligo");
      }
    } else if ((pointsHZ === pointsV) === pointsCH) {
      points += pointsCH;
      points = (points / 140) * 100;
      points = ~~points;
      setDisease("Hives, Vitiligo & Shingles");
    } else if (
      pointsCH > pointsV &&
      pointsCH > pointsHZ &&
      pointsCH > pointsAH
    ) {
      points += pointsCH;
      points = (points / 140) * 100;
      points = ~~points;
      setDisease("Chronic Hives");
    } else if (
      pointsAH > pointsV &&
      pointsAH > pointsHZ &&
      pointsAH > pointsCH
    ) {
      points += pointsAH;
      points = (points / 140) * 100;
      points = ~~points;
      setDisease("Chronic Hives");
    } else {
      points += pointsV;
      points = (points / 140) * 100;
      points = ~~points;
      setDisease("Shingles & Vitiligo");
    }
    console.log(points);
    if (points < 50) {
      setRiskLevel("Low");
      setImage(require("../assets/LowRisk.png"));
      setColor("#127935");
      setAsset(require("../assets/LowRiskA.png"));
      setRiskNum(points);
      setRiskNum(points);
    } else if (points >= 50 && points < 70) {
      setRiskLevel("Moderate");
      setImage(require("../assets/MediumRisk.png"));
      setColor("#91a131");
      setAsset(require("../assets/MediumRiskA.png"));
      setRiskNum(points);
    } else {
      setRiskLevel("High");
      setColor("#ff1515");
      setRiskNum(points);
      setImage(require("../assets/HighRisk.png"));
      setAsset(require("../assets/HighRiskA.png"));
    }
  }, []);

  return (
    <View style={styles.main1}>
      <ImageBackground style={styles.main} source={image}>
        <Image source={asset} style={{ width: 300, height: 300 }} />
        <Text
          style={{
            fontSize: 32,
            marginTop: 20,
            fontWeight: "600",
            textAlign: "center",
            alignSelf: "center",
            paddingHorizontal: 20,
          }}
        >{`You are at ${riskLevel} Risk (${riskNum}%) for ${disease}`}</Text>
        <Text
          style={{
            alignSelf: "center",
            textAlign: "center",
            padding: 20,
            color: color,
            textDecorationLine: "underline",
          }}
        >
          Consult your near dermatologist. DermaVision is not responsible for
          any misdiagnosis
        </Text>
        <View style={styles.report}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 30,
              marginBottom: 15,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Full Report
          </Text>
          <View style={styles.risk}>
            <Text style={styles.headRisk}>Shingles</Text>
            <Text style={styles.headRisk}>{riskHZ}%</Text>
          </View>
          <View style={styles.risk}>
            <Text style={styles.headRisk}>Vitiligo</Text>
            <Text style={styles.headRisk}>{riskV}%</Text>
          </View>
          <View style={styles.risk}>
            <Text style={styles.headRisk}>Chronic Hives</Text>
            <Text style={styles.headRisk}>{riskCH}%</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  main1: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  report: {
    width: "80%",
    backgroundColor: "#313841",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  risk: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  headRisk: {
    fontSize: 18,
    color: "#fff",
  },
});
